pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
        BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        APP_USERNAME = 'Admin'
        APP_PASSWORD = 'admin123'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js packages...'
                bat 'npm install'
                echo 'Installing Playwright Browsers...'
                bat 'npx playwright install'
            }
        }

        stage('Run Sanity Tests') {
            steps {
                echo 'Running Sanity tests...'
                bat 'npm run test:sanity'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                echo 'Running Smoke tests...'
                bat 'npm run test:smoke'
            }
        }

        stage('Run Regression Tests') {
            steps {
                echo 'Running Regression tests...'
                bat 'npm run test:regression'
            }
        }

        stage('Generate Report') {
            steps {
                echo 'Generating Allure Report...'
                bat 'npm run allure:generate'
            }
        }
    }

    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'playwright-report', reportFiles: 'index.html', reportName: 'Playwright HTML Report', reportTitles: ''])
        }
    }
}
