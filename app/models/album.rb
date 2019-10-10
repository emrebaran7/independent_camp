# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  artist_id    :integer          not null
#  title        :string           not null
#  description  :text
#  credits      :string
#  release_date :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Album < ApplicationRecord
    validates :artist_id, :title, :release_date, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'User' 

    has_many :tracks,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: 'Track'

    has_one_attached :photo


    def self.get_last(num)
        Album.order('release_date desc').limit(num)
    end    
        
end


