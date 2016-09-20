use csynapse

// init algos collection
db.algorithms.insert({"_id":"algorithms", "svm":{"description":"Support Vector Machines"}, "knearest":{"description":"Knearest Neighbors"},
"guassNB":{"description":"Gaussian Naive Bayes"},"sgd":{"description":"Stochastic Gradient Descent"},
"adaBoost":{"description":"Adaboost"}, "randomForest":{"description":"Random Forest"},
"perceptron":{"description":"Perceptron"},"nearestCentroid":{"description":"Nearest Centroid"},"passiveAggressive":{"description":"passiveAggressive"},
"decisionTree":{"description":"Decision Tree"},"leastSquares":{"description":"Least Squares"},
"ridge":{"description":"Ridge Regression"},"lasso":{"description":"Lasso"},
"elasticNet":{"description":"Elastic Net"},"lars":{"description":"Lars"},"orthogonalMatchingPursuit":{"description":"Orthongonal Matching Pursuit"},
"bayesianRidge":{"description":"Bayesian Ridge Regression"},"logisticRegression":{"description":"Logistic Regression"},
"adaline":{"description":"adaline neural network"},"hebbian":{"description":"hebbian neural network"},
"multiLayerPerceptronSig":{"description":"multilayer perceptron with sigmoid"},"multiLayerPerceptronTan":{"description":"multilayer perceptron with tan"}})

