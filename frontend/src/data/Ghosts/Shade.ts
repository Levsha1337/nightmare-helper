import {EvidenceBOOK, EvidenceEMF5, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Shade: Partial<Ghost> = {
    codeName: 'Shade',
    name: 'Тень',
    evidences: [EvidenceEMF5, EvidenceBOOK, EvidenceTEMP]
};

export default Object.assign({}, defaultGhostConfig, Shade) as Ghost;
