class ArtistColumnNameChange < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :artist?, :is_artist
  end
end
