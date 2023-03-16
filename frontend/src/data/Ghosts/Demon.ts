import {EvidenceBOOK, EvidencePRINTS, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Demon: Partial<Ghost> = {
    codeName: 'Demon',
    name: 'Демон',
    evidences: [EvidencePRINTS, EvidenceBOOK, EvidenceTEMP]
};

export default Object.assign({}, defaultGhostConfig, Demon) as Ghost;
