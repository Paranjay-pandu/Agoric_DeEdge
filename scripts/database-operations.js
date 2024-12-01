const mongoose = require('mongoose');
const UserModel = require('../api/models/UserModel');
const NFTModel = require('../api/models/NFTModel');
const SubscriptionModel = require('../api/models/SubscriptionModel');

class DatabaseOperations {
    static async connect() {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('MongoDB connected successfully');
        } catch (error) {
            console.error('MongoDB connection error:', error);
            process.exit(1);
        }
    }

    static async seedDatabase() {
        await this.connect();

        try {
            // Clear existing data
            await UserModel.deleteMany({});
            await NFTModel.deleteMany({});
            await SubscriptionModel.deleteMany({});

            // Seed Users
            const users = [
                {
                    username: 'artcreator1',
                    email: 'creator1@example.com',
                    role: 'creator'
                },
                {
                    username: 'nftcollector',
                    email: 'collector@example.com',
                    role: 'consumer'
                }
            ];

            const seedUsers = await UserModel.create(users);

            // Seed NFTs
            const nfts = [
                {
                    title: 'Digital Landscape',
                    description: 'Abstract digital art landscape',
                    creator: seedUsers[0]._id,
                    price: 0.5,
                    imageUrl: 'https://example.com/landscape.png'
                },
                {
                    title: 'Cyber Punk',
                    description: 'Futuristic cyber punk artwork',
                    creator: seedUsers[0]._id,
                    price: 1.2,
                    imageUrl: 'https://example.com/cyberpunk.png'
                }
            ];

            await NFTModel.create(nfts);

            console.log('Database seeded successfully');
        } catch (error) {
            console.error('Database seeding error:', error);
        } finally {
            mongoose.connection.close();
        }
    }

    static async backupDatabase() {
        await this.connect();

        try {
            const timestamp = new Date().toISOString().replace(/:/g, '-');
            const backupDir = `./backups/backup-${timestamp}`;

            // Create backup directory
            await fs.mkdir(backupDir, { recursive: true });

            // Backup collections
            const collections = ['users', 'nfts', 'subscriptions'];
            
            for (const collection of collections) {
                const data = await mongoose.connection.db.collection(collection).find().toArray();
                await fs.writeFile(
                    `${backupDir}/${collection}-backup.json`, 
                    JSON.stringify(data, null, 2)
                );
            }

            console.log(`Database backed up to ${backupDir}`);
        } catch (error) {
            console.error('Database backup error:', error);
        } finally {
            mongoose.connection.close();
        }
    }
}

// CLI argument handling
const operation = process.argv[2];
switch (operation) {
    case 'seed':
        DatabaseOperations.seedDatabase();
        break;
    case 'backup':
        DatabaseOperations.backupDatabase();
        break;
    default:
        console.log('Usage: node database-operations.js [seed|backup]');
}