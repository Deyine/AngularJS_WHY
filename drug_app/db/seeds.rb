# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Presentation.create(title: "Functional programming with Lisp", desc: Faker::Lorem.paragraph(4), speaker:"Ousmane Wilane", presentation_date:"10/10/2015", youtube_link: "1PhArSujR_A")
Presentation.create(title: "AngularJS, WHY?", desc: Faker::Lorem.paragraph(4), speaker:"Deyine Jiddou", presentation_date:"10/10/2015", youtube_link: "ejBkOjEG6F0")
Presentation.create(title: "Real world ReactJS", desc: Faker::Lorem.paragraph(4), speaker:"Hassane Moustapha", presentation_date:"10/10/2015", youtube_link: "N98ACjjJABw")
Presentation.create(title: "Maitre Gims", desc: Faker::Lorem.paragraph(4), speaker: Faker::Name.name, presentation_date:"10/10/2015", youtube_link: "6TpyRE_juyA")
Presentation.create(title: "Learn Java in 30 minutes", desc: Faker::Lorem.paragraph(4), speaker: Faker::Name.name, presentation_date:"10/10/2015", youtube_link: "WPvGqX-TXP0")
Presentation.create(title: "EmberJS in Action", desc: Faker::Lorem.paragraph(4), speaker: Faker::Name.name, presentation_date:"10/10/2015", youtube_link: "0Rf4mLUxW-g")
Presentation.create(title: "What is NodeJS", desc: Faker::Lorem.paragraph(4), speaker: Faker::Name.name, presentation_date:"10/10/2015", youtube_link: "pU9Q6oiQNd0")
Presentation.create(title: "JavaScript, Bonjour les antipatterns", desc: Faker::Lorem.paragraph(4), speaker: Faker::Name.name, presentation_date:"10/10/2015", youtube_link: "iHcEZ5z7G-M")
Presentation.create(title: "ASP.NET, repose en paix!", desc: Faker::Lorem.paragraph(4), speaker: Faker::Name.name, presentation_date:"10/10/2015", youtube_link: "5KxF476mRFE")
Presentation.create(title: "WordPress Basics", desc: Faker::Lorem.paragraph(4), speaker: Faker::Name.name, presentation_date:"10/10/2015", youtube_link: "CUHlWbDwCo8")