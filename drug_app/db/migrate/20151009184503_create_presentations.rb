class CreatePresentations < ActiveRecord::Migration
  def change
    create_table :presentations do |t|
      t.string :title
      t.text :desc
      t.string :speaker
      t.date :presentation_date
      t.string :slide_link
      t.string :youtube_link

      t.timestamps null: false
    end
  end
end
