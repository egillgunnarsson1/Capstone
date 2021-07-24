import sys
sys.path.insert(0, 'C:/Users/egill/OneDrive/Desktop/MSproject/utils')
sys.path.insert(0, 'C:/Users/egill/OneDrive/Desktop/MSproject/metrics')
import utils
import metrics
import io
import random
import json
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.cm as colormap
import seaborn as sns

from flask import Response, Flask, jsonify, abort, make_response, request, render_template
from flask_cors import CORS

from confusion_matrix import CM
from cm_generator import CMGenerator
from acc import ACC
from bac import BAC
from dli import DLI
from fbs import FBS
from gem import GEM
from gsr import GSR
from hss import HSS
from pre import PRE
from rec import REC
from roc import ROC
from tss import TSS
from youden import YDN

app = Flask(__name__)
CORS(app)


@app.route('/imbalance/<float:neg>/', methods=['GET'])
def imbalance(neg):
    gen = CMGenerator(n_p=100, n_n=(100*neg), n_cm=64)
    gen.generate_cms()

    all_dli = []
    all_tss = []
    all_hss = []
    all_acc = []
    all_bac = []
    all_pre = []
    all_rec = []
    all_f1s = []
    all_gem = []
    all_gsr = []
    all_roc = []
    all_ydn = []

    for cm in gen.all_cms:
        dli = DLI(cm)
        all_dli.append(dli.value)
        tss = TSS(cm)
        all_tss.append(tss.value)
        hss = HSS(cm)
        all_hss.append(hss.value)
        acc = ACC(cm)
        all_acc.append(acc.value)
        bac = BAC(cm)
        all_bac.append(bac.value)
        pre = PRE(cm)
        all_pre.append(pre.value)
        rec = REC(cm)
        all_rec.append(rec.value)
        f1s = FBS(cm)
        all_f1s.append(f1s.value)
        gem = GEM(cm)
        all_gem.append(gem.value)
        gsr = GSR(cm)
        all_gsr.append(gsr.value)
        roc = ROC(cm)
        all_roc.append(roc.value)
        ydn = YDN(cm)
        all_ydn.append(ydn.value)



    #HSS Matrix Initialization
    tss_mat = np.array(all_tss[::-1]).reshape((64, 64))
    tss_mat = np.flip(tss_mat, 1)
    dli_mat = np.array(all_dli[::-1]).reshape((64, 64))
    dli_mat = np.flip(dli_mat, 1)
    hss_mat = np.array(all_hss[::-1]).reshape((64, 64))
    hss_mat = np.flip(hss_mat, 1)
    acc_mat = np.array(all_acc[::-1]).reshape((64, 64))
    acc_mat = np.flip(acc_mat, 1)
    bac_mat = np.array(all_bac[::-1]).reshape((64, 64))
    bac_mat = np.flip(bac_mat, 1)
    pre_mat = np.array(all_pre[::-1]).reshape((64, 64))
    pre_mat = np.flip(pre_mat, 1)
    rec_mat = np.array(all_rec[::-1]).reshape((64, 64))
    rec_mat = np.flip(rec_mat, 1)
    f1s_mat = np.array(all_f1s[::-1]).reshape((64, 64))
    f1s_mat = np.flip(f1s_mat, 1)
    gem_mat = np.array(all_gem[::-1]).reshape((64, 64))
    gem_mat = np.flip(gem_mat, 1)
    gsr_mat = np.array(all_gsr[::-1]).reshape((64, 64))
    gsr_mat = np.flip(gsr_mat, 1)
    roc_mat = np.array(all_roc[::-1]).reshape((64, 64))
    roc_mat = np.flip(roc_mat, 1)
    ydn_mat = np.array(all_ydn[::-1]).reshape((64, 64))
    ydn_mat = np.flip(ydn_mat, 1)


    return jsonify({"tss_mat" : tss_mat.tolist(),
                             "dli_mat" : dli_mat.tolist(),
                             "hss_mat" : hss_mat.tolist(),
                             "bac_mat" : bac_mat.tolist(),
                             "pre_mat" : pre_mat.tolist(),
                             "rec_mat" : rec_mat.tolist(),
                             "gem_mat" : gem_mat.tolist(),
                             "gsr_mat" : gsr_mat.tolist(),
                             "roc_mat" : roc_mat.tolist(),
                             "ydn_mat" : ydn_mat.tolist(),
                             "f1s_mat" : f1s_mat.tolist(),
                             "acc_mat": acc_mat.tolist()
                             })


@app.route('/CMdata/', methods=['POST'])
def CMDATA():
    TP = request.form['tp']
    FP = request.form['fp']
    FN = request.form['fn']
    TN = request.form['tn']

    TPR = float(TP)/(float(TP)+float(FN))
    TNR = float(TN)/(float(TN)+float(FP))

    if TP:
        return jsonify({
            "TPR": round(TPR, 2),
            "TNR": round(TNR, 2),
            "TP": TP,
            "FP": FP,
            "FN": FN,
            "TN": TN
        })
    return jsonify({'error': 'Missing Data!'})



@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


if __name__ == '__main__':
    app.run(host='localhost', debug=True)
