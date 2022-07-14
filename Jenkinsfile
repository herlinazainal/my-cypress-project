import groovy.json.JsonOutput

pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Example: cypress/e2e/myProject/*.spec.js")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Select the browser where you want to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --headless --browser ${BROWSER} --spec ${SPEC} --record --key 68c1157f-e816-47d3-bede-387146d405af"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploying the application"
            }   
        }
    }
}