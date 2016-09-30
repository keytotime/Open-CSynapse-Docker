use csynapse

// init algos collection
db.algorithms.insert({"_id":"algorithms", "svm":{"description":"Support Vector Machines", "name":"Support Vector Machine"},
"knearest":{"description":"Knearest Neighbors", "name":"K-nearest Neighbors"},
"guassNB":{"description":"Gaussian Naive Bayes", "name":"Gaussian Naive Bayes"},"sgd":{"description":"Stochastic Gradient Descent", "name":"Stochastic Gradient Descent"},
"adaBoost":{"description":"Adaboost", "name":"Adabost"}, "randomForest":{"description":"Random Forest", "name":"Random Forest"},
"perceptron":{"description":"Perceptron", "name":"Perceptron"},"nearestCentroid":{"description":"Nearest Centroid", "name":"Nearest Centroid"},
"passiveAggressive":{"description":"passiveAggressive", "name":"Passive Aggressive"},
"decisionTree":{"description":"Decision Tree", "name":"Decision Tree"},"leastSquares":{"description":"Least Squares", "name":"Least Square Regression"},
"ridge":{"description":"Ridge Regression", "name":"Ridge Regression"},"lasso":{"description":"Lasso", "name": "Lasso"},
"elasticNet":{"description":"Elastic Net", "name": "Elastic Net"},"lars":{"description":"Lars", "name":"Lars"},
"orthogonalMatchingPursuit":{"description":"Orthongonal Matching Pursuit", "name":"Orthongonal Matching Pursuit"},
"bayesianRidge":{"description":"Bayesian Ridge Regression", "name":"Bayesian Ridge Regression"},
"logisticRegression":{"description":"Logistic Regression", "name": "Logistic Regression"},
"adaline":{"description":"adaline neural network", "name": "Adaline Neural Net"},
"hebbian":{"description":"hebbian neural network", "name": "Hebbian Neural Net"},
"multiLayerPerceptronSig":{"description":"multilayer perceptron with sigmoid", "name":"Multi-Layer Perceptron Sigmoid"},
"multiLayerPerceptronTan":{"description":"multilayer perceptron with tan", "name":"Multi-Layer Perceptron Tan"}})

