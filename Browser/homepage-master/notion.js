const {Client} = requite("@notionhq/client")

const notion = new Client({auth: "secret_HHq786RJ7J4ksnjPY7LjLNNCrHehxWc8lipA922q12O"})

async function getDatabase(){
    const response = await notion.databases.retrieve({
        database_id: "6ee11fbe3feb435d82dbf1ef12a56d02"
    })
}