require 'httparty'

class Github
  def self.get(gh_login, gh_repo)
    raise "gh_login and gh_repo are both required" unless gh_login != nil && gh_repo != nil
    data = HTTParty.get "http://github.com/api/v2/json/repos/show/#{gh_login}/#{gh_repo}/network/"
    forks = data['network'].map do |fork|
      { 'entry_id' => 7, 'gh_login' => fork['owner'], 'latest_commit_date' => fork['pushed_at'], 'latest_commit_id' => 'todo', 'score' => 5.4 }
    end
    { 'data' => forks }
  end
end

# {"network"=>[
#   {"name"=>"JavaScriptOlympics", "has_wiki"=>true, "created_at"=>"2010/06/17 11:40:52 -0700", 
#   "watchers"=>10, "private"=>false, "url"=>"http://github.com/VinylFox/JavaScriptOlympics", "fork"=>false, 
#   "pushed_at"=>"2010/07/08 07:11:27 -0700", "has_downloads"=>true, "open_issues"=>0, "homepage"=>"http://www.bmorejs.info/",
#   "has_issues"=>true, "forks"=>8, "description"=>"Code used for and created by the JavaScript Olympics", "owner"=>"VinylFox"},
# 
#   {"name"=>"JavaScriptOlympics", "has_wiki"=>true, "created_at"=>"2010/07/07 16:11:08 -0700", "watchers"=>1, 
#    "private"=>false, "url"=>"http://github.com/jjulian/JavaScriptOlympics", "fork"=>true, 
#    "pushed_at"=>"2010/07/07 18:17:44 -0700", "has_downloads"=>true, "open_issues"=>0, 
#    "homepage"=>"http://www.bmorejs.info/", "has_issues"=>false, "forks"=>0, 
#    "description"=>"Code used for and created by the JavaScript Olympics", "owner"=>"jjulian"}
# ]}
