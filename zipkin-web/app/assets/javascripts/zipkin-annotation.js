/*
 * Copyright 2012 Twitter Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Zipkin = Zipkin || {};
Zipkin.Annotation = (function() {

  var Annotation = function(config) {
    this.value     = config.value;
    this.timestamp = config.timestamp;
    this.host      = config.host;
    this.hostName  = config.hostName;
    this.span      = config.span;
  };

  Annotation.prototype.getValue     = function() { return this.value; };
  Annotation.prototype.getTimestamp = function() { return this.timestamp; };
  Annotation.prototype.getHost      = function() { return this.host; };
  Annotation.prototype.getHostName  = function() { return this.hostName; };
  Annotation.prototype.getSpan      = function() { return this.span; };

  Annotation.prototype.setValue     = function(v) { this.value = v; };
  Annotation.prototype.setTimestamp = function(t) { this.timestamp = t; };
  Annotation.prototype.setHost      = function(h) { this.host = h; };
  Annotation.prototype.setHostName  = function(h) { this.hostName = h; };
  Annotation.prototype.setSpan      = function(s) { this.span = s; };

  return Annotation;
})();

Zipkin.fromRawAnnotation = function(rawAnnotation) {
  return new Zipkin.Annotation({
    value: rawAnnotation.annotation,
    timestamp: rawAnnotation.timestamp,
    host: rawAnnotation.host,
    hostName: rawAnnotation.hostname
  });
};
