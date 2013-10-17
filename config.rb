###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

helpers do

  def ie_tag(name=:body, attrs={}, &block)
    attrs.symbolize_keys!
    haml_concat("<!--[if lt IE 7]> #{ tag(name, add_class('ie6 oldie', attrs)) } <![endif]-->")
    haml_concat("<!--[if IE 7]>    #{ tag(name, add_class('ie7 oldie', attrs)) } <![endif]-->")
    haml_concat("<!--[if IE 8]>    #{ tag(name, add_class('ie8 oldie', attrs)) } <![endif]-->")
    haml_concat("<!--[if gt IE 8]><!-->")
    haml_tag name, attrs do
      haml_concat("<!--<![endif]-->")
      block.call
    end
  end

  def ie_html(attrs={}, &block)
    ie_tag(:html, attrs, &block)
  end

  def add_class(name, attrs)
    classes = attrs[:class] || ''
    classes.strip!
    classes = ' ' + classes if !classes.blank?
    classes = name + classes
    attrs.merge(:class => classes)
  end

end

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :markdown_engine, :kramdown
set :markdown, :fenced_code_blocks => true,
               :autolink => true,
               :smartypants => true

activate :directory_indexes
set :build_dir, "tmp"

# Activate sync extension
if File.exists?(".sync.yml")
  sync_settings = YAML.load_file(".sync.yml")

  # Activate sync extension
  activate :sync do |sync|
    sync_settings.each do |setting, value|
      sync.send("#{setting}=", value)
    end
  end
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash
  activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
