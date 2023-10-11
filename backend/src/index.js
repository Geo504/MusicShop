import app from './app.js';
import { sequelize } from './db/db.js';


async function main() {
  try{
    await sequelize.sync({ alter: true });

    const PORT = process.env.PORT || 5000

    app.listen(PORT, () => {
      console.log('Server started on port:', PORT);
    });
  } 
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();

