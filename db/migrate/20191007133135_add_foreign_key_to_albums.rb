class AddForeignKeyToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :albums, :artist_id
  end
end
