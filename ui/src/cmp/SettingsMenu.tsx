import {Layout, Radio, Space} from 'antd';
import * as React from 'react';
import {Settings} from '../models/Settings';

type IProps = {
    settings: Settings;
    onSettingsChange: (settings: Settings) => void;
};

export class SettingsMenu extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    onEvidenceCountChange = (count: number) => {
        this.props.onSettingsChange({
            evidenceCount: count
        });
    };

    render(): React.ReactNode {
        return (
            <Radio.Group
                optionType="button"
                buttonStyle="solid"
                onChange={(e) => this.onEvidenceCountChange(e.target.value)}
                value={this.props.settings.evidenceCount}
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
        );
    }
}
