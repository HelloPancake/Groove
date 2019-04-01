class AddTitleToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :title, :text, null: false
  end
end
