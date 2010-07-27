require 'sinatra'
require 'json'
require 'github'

# require 'db/setup'
# configure :development, :cucumber do
#   require 'ruby-debug'
#   DataMapper.auto_migrate!
# end

post '/event/create' do
  # add new event to the database
  {:success => true, :event_id => 1}.to_json
end

post '/event/start' do
  # params[:event_id]
  # the event has begun!
  {:success => true}.to_json
end

get '/event/poll' do
  # return all forks/commits - hit github.com
  Github.get('VinylFox','JavaScriptOlympics').to_json #todo get info from db
end

post '/entry/score' do
  # params[:entry_id], params[:score]
  {:success => true}.to_json
end
