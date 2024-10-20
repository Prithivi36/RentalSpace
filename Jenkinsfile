pipeline{
    agent{
        node{
            label 'rentalazure'
        }
    }
    tools{
        nodejs 'node'
    }
    stages{
        
        
        stage("build"){
            steps{
                sh'''
                 npm install
                 npm run build
                '''
            }
        }
        stage("clean"){
            steps{
                sh'''
                    cd /var/www/
                    sudo rm -rf html
                    mkdir html
                '''
            }
        }
        stage("deploy"){
            steps{
                sh'''
                    sudo cp -r dist/* /var/www/html/
                '''
            }
        }
    }
}
