exports.up = async (knex) => {
  await knex.schema
  .createTable('plants', (plants) => {
    plants.increments('plant_id')
    plants.string('nickname', 128).notNullable()
    plants.string('species', 128).notNullable()
    plants.string('h2oFrequency', 128).notNullable()
  })
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('plants')
  
}
