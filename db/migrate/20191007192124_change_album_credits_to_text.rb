class ChangeAlbumCreditsToText < ActiveRecord::Migration[5.2]
  def change
        change_column :albums, :credits, :text
  end
end
