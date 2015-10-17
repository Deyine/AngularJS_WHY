json.array!(@presentations) do |presentation|
  json.extract! presentation, :id, :title, :desc, :speaker, :presentation_date, :slide_link, :youtube_link
  json.url presentation_url(presentation, format: :json)
end
