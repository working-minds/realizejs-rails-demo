json.array!(@issues) do |issue|
  json.extract! issue, :id
  json.url issue_url(issue, format: :json)
end
