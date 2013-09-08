require 'rubygems'
require 'middleman/rack'

require 'rack/rewrite'
use Rack::Rewrite do
  r301      '/about/',   '/'
  r301      '/projects/',   '/'
  r301      '/about',   '/'
  r301      '/projects',   '/'
end

run Middleman.server
