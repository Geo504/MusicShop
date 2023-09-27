import app from './app.js';
import { sequelize } from './db/db.js';


async function main() {
  try{
    await sequelize.sync({ alter: true });

    app.listen(5000)
    console.log('Server started on port', 5000);
  } 
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();

