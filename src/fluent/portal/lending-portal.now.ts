import '@servicenow/sdk/global'
import { SPWidget, SPPage } from '@servicenow/sdk/core'

// Equipment lending widget: card list with borrow / return actions.
export const lendingWidget = SPWidget({
    $id: Now.ID['x_2301476_lending_equipment_widget'],
    id: 'x_2301476_lending_equipment_widget',
    name: '備品貸出',
    category: 'custom',
    public: false,
    hasPreview: false,
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.css'),
})

// Portal page that hosts the lending widget (login required).
export const lendingPage = SPPage({
    pageId: 'equipment_lending',
    title: '備品貸出',
    category: 'custom',
    public: false,
    draft: false,
    shortDescription: 'Equipment lending portal page',
    containers: [
        {
            $id: Now.ID['x_2301476_lending_page_container'],
            name: 'Equipment Lending - Main',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_2301476_lending_page_row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_2301476_lending_page_column'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_2301476_lending_page_instance'],
                                    id: 'x_2301476_lending_page_instance',
                                    widget: lendingWidget,
                                    active: true,
                                    order: 100,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
