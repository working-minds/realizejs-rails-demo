module ReactHelper

  def render_jsx(jsx, props={}, id="jsx-content-#{SecureRandom.hex(4)}")
    content = <<-HTML
      <div id='#{id}'></div>
      <script>
        $(function() {
          var el = #{React::JSX.transform(jsx)};
          ReactDOM.render(el, $("##{id}")[0]);
        });
      </script>
    HTML

    content.html_safe
  end

  def jsx_spread(props)
    content = ''
    props.each_pair do |key, prop|
      content += "#{key}={#{prop.to_json}} "
    end

    content
  end

end