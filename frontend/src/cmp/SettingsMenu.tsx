import {Col, Divider, Radio, Row} from 'antd';
import * as React from 'react';
import {GhostSpeedModifiers, Settings} from '../models/Settings';

const radioStyle: React.CSSProperties = {
    margin: '16px'
};

type IProps = {
    settings: Settings;
    onSettingsChange: (settings: Settings) => void;
};

export class SettingsMenu extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    onGhostSpeedModifierChange = (speed: GhostSpeedModifiers) => {
        this.props.onSettingsChange({
            ...this.props.settings,
            ghostSpeedModifier: speed
        });
    };

    onEvidenceCountChange = (count: number) => {
        this.props.onSettingsChange({
            ...this.props.settings,
            evidenceCount: count
        });
    };

    render(): React.ReactNode {
        return (
            <Row
                justify={'center'}
                align={'middle'}
                style={{
                    height: '100%'
                }}
            >
                <Radio.Group
                    optionType="button"
                    buttonStyle="solid"
                    onChange={(e) => this.onGhostSpeedModifierChange(e.target.value)}
                    value={this.props.settings.ghostSpeedModifier}
                    style={radioStyle}
                    options={[
                        {
                            value: 1,
                            label: 'Скорость 100%'
                        },
                        {
                            value: 1.25,
                            label: 'Скорость 125%'
                        },
                        {
                            value: 1.5,
                            label: 'Скорость 150%'
                        }
                    ]}
                />
                <Radio.Group
                    optionType="button"
                    buttonStyle="solid"
                    onChange={(e) => this.onEvidenceCountChange(e.target.value)}
                    value={this.props.settings.evidenceCount}
                    style={radioStyle}
                    options={[
                        {
                            value: 1,
                            label: 'Одна улика'
                        },
                        {
                            value: 2,
                            label: 'Две улики'
                        },
                        {
                            value: 3,
                            label: 'Три улики'
                        }
                    ]}
                />
            </Row>
        );
    }
}
