class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :audio_url
      t.string :image_url
      t.integer :user_id, null: false
      t.string :body
      t.timestamps
    end
    add_index :posts, :user_id 
  end
end
