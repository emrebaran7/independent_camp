# == Schema Information
#
# Table name: tracks
#
#  id           :bigint           not null, primary key
#  album_id     :integer          not null
#  title        :string           not null
#  ord          :integer          not null
#  release_date :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Track < ApplicationRecord
    validates :album_id, :title, :ord, presence: true

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: 'Album'
end
