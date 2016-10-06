use csynapse

// init algos collection
db.algorithms.insert({"_id":"algorithms", "svm":{"description":"Support Vector Machines", "name":"Support Vector Machine", "type":"supervised"},
"knearest":{"description":"Knearest Neighbors", "name":"K-nearest Neighbors", "type":"supervised"},
"guassNB":{"description":"Gaussian Naive Bayes", "name":"Gaussian Naive Bayes", "type":"supervised"},
"sgd":{"description":"Stochastic Gradient Descent", "name":"Stochastic Gradient Descent","type":"supervised"},
"adaBoost":{"description":"Adaboost", "name":"Adabost", "type":"supervised"},
"randomForest":{"description":"Random Forest", "name":"Random Forest","type":"supervised"},
"perceptron":{"description":"Perceptron", "name":"Perceptron","type":"supervised"},
"nearestCentroid":{"description":"Nearest Centroid", "name":"Nearest Centroid","type":"supervised"},
"passiveAggressive":{"description":"passiveAggressive", "name":"Passive Aggressive","type":"supervised"},
"decisionTree":{"description":"Decision Tree", "name":"Decision Tree","type":"supervised"},
"leastSquares":{"description":"Least Squares", "name":"Least Square Regression","type":"regression"},
"ridge":{"description":"Ridge Regression", "name":"Ridge Regression","type":"regression"},
"lasso":{"description":"Lasso", "name": "Lasso","type":"regression"},
"elasticNet":{"description":"Elastic Net", "name": "Elastic Net","type":"regression"},
"lars":{"description":"Lars", "name":"Lars","type":"regression"},
"orthogonalMatchingPursuit":{"description":"Orthongonal Matching Pursuit", "name":"Orthongonal Matching Pursuit","type":"regression"},
"bayesianRidge":{"description":"Bayesian Ridge Regression", "name":"Bayesian Ridge Regression","type":"regression"},
"logisticRegression":{"description":"Logistic Regression", "name": "Logistic Regression","type":"regression"},
"adaline":{"description":"adaline neural network", "name": "Adaline Neural Net","type":"supervised"},
"hebbian":{"description":"hebbian neural network", "name": "Hebbian Neural Net","type":"supervised"},
"multiLayerPerceptronSig":{"description":"multilayer perceptron with sigmoid", "name":"Multi-Layer Perceptron Sigmoid","type":"supervised"},
"multiLayerPerceptronTan":{"description":"multilayer perceptron with tan", "name":"Multi-Layer Perceptron Tan","type":"supervised"}})

