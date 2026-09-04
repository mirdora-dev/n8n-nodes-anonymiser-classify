import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserClassify implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser Classify',
        name: 'anonymiserClassify',
        icon: 'file:anonymiserclassify.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser classify operations in n8n',
        defaults: {
            name: 'Anonymiser Classify',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserClassifyApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
