pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    COMMITID = sh(returnStdout: true, script: 'git rev-parse HEAD').trim().take(7)
                }
                echo 'Building...'
                echo "${COMMITID}"
                sh "docker build -t pcdhan/erp-system:${COMMITID} ."
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Publish') {
            steps {
                echo 'Deploying...'
                sh "docker login -u=${env.DOCKER_USERNAME} -p=${env.DOCKER_PASSWORD}"
                echo "Successfully logged in to JFrog"
            }
        }
    }
}
