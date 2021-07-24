import sys
sys.path.insert(0, 'C:/Users/egill/OneDrive/Desktop/MSproject/utils')
import utils
from confusion_matrix import CM
import numpy as np
import copy


class GEM:
    def __init__(self, cm: CM):
        """
        Calculates the geometric mean (GEM) based on the true classes and the
        predicted ones.

        .. math::

            GEM = sqrt(TPR * TNR)

        :param cm: an instance of a confusion matrix for which value is required.
        """
        self.cm: CM = cm
        self.value = self.__measure()

    def __measure(self):
        """
        :return: geometric mean. Following sklearn's implementation, when
        the denominator is zero, it returns zero.
        """
        cm: CM = copy.deepcopy(self.cm)
        tpr = cm.tp / cm.p if cm.p != 0 else 0
        tnr = cm.tn / cm.n if cm.n != 0 else 0
        return np.sqrt(tpr + tnr)
