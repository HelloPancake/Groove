class RemoveTypeFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :type
    add_column :posts, :post_type, :string
  end
end
