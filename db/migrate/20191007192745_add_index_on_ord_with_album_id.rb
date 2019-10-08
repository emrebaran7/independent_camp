class AddIndexOnOrdWithAlbumId < ActiveRecord::Migration[5.2]
  def change
    add_index(:tracks, [:album_id, :ord])
  end
end
