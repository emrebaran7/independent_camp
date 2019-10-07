class RemoveReleaseDateFromTracks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :release_date
  end
end
