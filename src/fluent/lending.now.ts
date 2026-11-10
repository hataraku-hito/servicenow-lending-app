import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    IntegerColumn,
    ReferenceColumn,
    DateTimeColumn,
    BusinessRule,
    Record,
} from '@servicenow/sdk/core'
import { setDueDate, preventDoubleLoan, syncEquipmentStatus } from '../server/loan-rules'

// Equipment master. The portal widget renders one card per record.
export const x_2301476_lending_equipment = Table({
    name: 'x_2301476_lending_equipment',
    label: '備品',
    display: 'name',
    allowWebServiceAccess: true,
    schema: {
        name: StringColumn({ label: '備品名', mandatory: true, maxLength: 100 }),
        category: StringColumn({
            label: 'カテゴリ',
            default: 'other',
            choices: {
                pc: 'PC・タブレット',
                meeting: '会議機材',
                camera: '撮影機材',
                other: 'その他',
            },
        }),
        location: StringColumn({ label: '保管場所', maxLength: 100 }),
        max_days: IntegerColumn({ label: '最大貸出日数', default: 7 }),
        color: StringColumn({
            label: 'カード色',
            default: 'blue',
            choices: {
                blue: 'ブルー',
                amber: 'アンバー',
                purple: 'パープル',
                red: 'レッド',
                green: 'グリーン',
                teal: 'ティール',
            },
        }),
        icon: StringColumn({
            label: 'アイコン',
            default: 'laptop',
            choices: {
                laptop: 'ラップトップ',
                video: 'ビデオ',
                tablet: 'タブレット',
                camera: 'カメラ',
                headset: 'ヘッドセット',
                battery: 'バッテリー',
            },
        }),
        status: StringColumn({
            label: '状態',
            default: 'available',
            choices: {
                available: '貸出可',
                lent: '貸出中',
                maintenance: 'メンテナンス中',
            },
        }),
    },
})

// One record per lending event. Active loans have state = 'lent'.
export const x_2301476_lending_loan = Table({
    name: 'x_2301476_lending_loan',
    label: '貸出記録',
    display: 'equipment',
    allowWebServiceAccess: true,
    schema: {
        equipment: ReferenceColumn({
            label: '備品',
            mandatory: true,
            referenceTable: 'x_2301476_lending_equipment',
        }),
        borrower: ReferenceColumn({
            label: '借りた人',
            mandatory: true,
            referenceTable: 'sys_user',
        }),
        lent_at: DateTimeColumn({ label: '貸出日時' }),
        due_on: DateTimeColumn({ label: '返却期限' }),
        returned_at: DateTimeColumn({ label: '返却日時' }),
        state: StringColumn({
            label: '状態',
            default: 'lent',
            choices: {
                lent: '貸出中',
                returned: '返却済み',
            },
        }),
    },
})

// Fill in the return deadline automatically when a loan is created.
BusinessRule({
    $id: Now.ID['br_loan_set_due_date'],
    name: 'Set Due Date',
    table: 'x_2301476_lending_loan',
    action: ['insert'],
    when: 'before',
    order: 100,
    active: true,
    script: setDueDate,
})

// Never lend the same equipment to two people at once.
BusinessRule({
    $id: Now.ID['br_loan_prevent_double'],
    name: 'Prevent Double Loan',
    table: 'x_2301476_lending_loan',
    action: ['insert'],
    when: 'before',
    order: 200,
    active: true,
    script: preventDoubleLoan,
})

// Keep the equipment status in sync with its active loan.
BusinessRule({
    $id: Now.ID['br_loan_sync_status'],
    name: 'Sync Equipment Status',
    table: 'x_2301476_lending_loan',
    action: ['insert', 'update'],
    when: 'after',
    order: 100,
    active: true,
    script: syncEquipmentStatus,
})

// Sample equipment shown on the portal page.
Record({
    $id: Now.ID['equip_macbook'],
    table: 'x_2301476_lending_equipment',
    data: {
        name: 'MacBook Pro 14インチ',
        category: 'pc',
        location: '3Fロッカー',
        max_days: 7,
        color: 'blue',
        icon: 'laptop',
        status: 'available',
    },
})

Record({
    $id: Now.ID['equip_projector'],
    table: 'x_2301476_lending_equipment',
    data: {
        name: 'プロジェクター',
        category: 'meeting',
        location: '2F会議室B',
        max_days: 3,
        color: 'amber',
        icon: 'video',
        status: 'available',
    },
})

Record({
    $id: Now.ID['equip_ipad'],
    table: 'x_2301476_lending_equipment',
    data: {
        name: 'iPad（第10世代）',
        category: 'pc',
        location: '3Fロッカー',
        max_days: 7,
        color: 'purple',
        icon: 'tablet',
        status: 'available',
    },
})

Record({
    $id: Now.ID['equip_camera'],
    table: 'x_2301476_lending_equipment',
    data: {
        name: 'ミラーレスカメラ',
        category: 'camera',
        location: '1F受付',
        max_days: 3,
        color: 'red',
        icon: 'camera',
        status: 'available',
    },
})

Record({
    $id: Now.ID['equip_headset'],
    table: 'x_2301476_lending_equipment',
    data: {
        name: 'ワイヤレスヘッドセット',
        category: 'meeting',
        location: '3Fロッカー',
        max_days: 7,
        color: 'green',
        icon: 'headset',
        status: 'available',
    },
})

Record({
    $id: Now.ID['equip_battery'],
    table: 'x_2301476_lending_equipment',
    data: {
        name: 'モバイルバッテリー',
        category: 'other',
        location: '1F受付',
        max_days: 7,
        color: 'teal',
        icon: 'battery',
        status: 'available',
    },
})
