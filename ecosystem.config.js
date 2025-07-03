module.exports = {
    apps: [
        {
            name: "Whatsapp",
            script: "npm",
            automation: false,
            args: "run start",
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
}
