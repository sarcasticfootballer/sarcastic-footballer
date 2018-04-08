#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os
import re
import logging
from google.appengine.ext import db
from google.appengine.ext import ndb
from google.appengine.api import users
from google.appengine.api import images
from google.appengine.api import search
import datetime
import urllib2
import urllib
import time
import json
from google.appengine.api import memcache
import cgi
import math


class Handler(webapp2.RequestHandler):
    def send_data(self, data, **kw):
        data_obj = {'data': data}
        if kw is not None:
            kw.update(data_obj)
        else:
            kw = data_obj 
        self.send(kw)

    def send_error(self, msg, **kw):
        data_obj = {'msg': msg}
        if kw is not None:
            kw.update(data_obj)
        else:
            kw = data_obj 
        self.send(kw, 400)

    def send(self, data, status=200):
        data['status'] = status
        self.send_response(data)

    def send_response(self, data):
        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(data, default=str))

    def parse_json(self):
        return json.loads(self.request.body)

# Articles dB


class Article(ndb.Model):
    headline = ndb.StringProperty(required=True)
    sideHeadline = ndb.StringProperty()
    content = ndb.TextProperty(required=True)
    created = ndb.DateProperty(auto_now_add=True)
    author = ndb.StringProperty(required=True)
    picLink = ndb.StringProperty()
    secPicLink = ndb.StringProperty()
    views = ndb.IntegerProperty(default=0)
    featured = ndb.BooleanProperty(default=False)
    downVotes = ndb.IntegerProperty(default=0)
    upVotes = ndb.IntegerProperty(default=0)
    tags = ndb.StringProperty(repeated=True)


class PublishArticle(Handler):
    def post(self):
        article_data = self.parse_json()
        article = self.create_article(article_data)
        try:
            article_key = article.put()
            data = {'articleId': article_key.id(), 'urlSafeKey': article_key.urlsafe()}
            self.send_data(data, msg='article saved in dB')
        except db.Error as e:
            self.send_error(str(e))

    def create_article(self, article_data):
        article = Article()
        if ('headline' in article_data and article_data['headline']):
            article.headline = article_data['headline']
        if ('sideHeadline' in article_data):
            article.sideHeadline = article_data['sideHeadline']
        if ('content' in article_data and article_data['content']):
            article.content = article_data['content']
        if ('author' in article_data and article_data['author']):
            article.author = article_data['author']
        if ('picLink' in article_data):
            article.picLink = article_data['picLink']
        if ('secPicLink' in article_data):
            article.secPicLink = article_data['secPicLink']
        if ('featured' in article_data):
            article.featured = article_data['featured']
        if ('tags' in article_data):
            article.tags = article_data['tags']
        return article


class GetPopularArticles(Handler):
    def get(self):
        count = self.request.get('count') or 5
        query = "order by views desc limit %s" % count
        try:
            popular_articles = [dict(article.to_dict(), id=article.key.id()) for article in Article.gql(query).fetch()]            
            self.send_data(popular_articles)
        except db.Error as e:
            self.send_error(str(e))

class GetLatestArticles(Handler):
    def get(self):
        count = self.request.get('count') or 5
        query = "order by created desc limit %s" % count
        try:
            latest_articles = [dict(article.to_dict(), id=article.key.id()) for article in Article.gql(query).fetch()]
            self.send_data(latest_articles)
        except db.Error as e:
            self.send_error(str(e))

app = webapp2.WSGIApplication([
    ('/api/publisharticle', PublishArticle),
    ('/api/populararticles', GetPopularArticles),
    ('/api/latestarticles', GetLatestArticles),    
], debug=True)
