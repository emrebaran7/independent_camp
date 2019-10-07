class ChangeReleaseDateDataTypeInAlbums < ActiveRecord::Migration[5.2]
  def change
    change_column :albums, :release_date, :date
  end
end
