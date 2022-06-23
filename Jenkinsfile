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
                
                sh "docker login ${env.CONTAINER_REGISTRY} -u=${env.DOCKER_USERNAME} -p=${env.DOCKER_PASSWORD}"
                echo "Successfully logged in to JFrog"
                
                echo "Docker tag ${env.CONTAINER_REGISTRY}/${env.REPOSITORY}/erp-system:${COMMITID}"
                sh "docker tag pcdhan/erp-system:${COMMITID} ${env.CONTAINER_REGISTRY}/${env.REPOSITORY}/erp-system:${COMMITID}"
                
                echo "Pushing images to container registry, Endpoint: ${env.CONTAINER_REGISTRY}/${env.REPOSITORY}/erp-system:${COMMITID}"
                sh "docker push ${env.CONTAINER_REGISTRY}/${env.REPOSITORY}/erp-system:${COMMITID}"
            }
        }
    }
}
