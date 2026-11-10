import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'ad749b7dd72c4f3bbdbfbfbe2c350f76'
                    }
                    br_loan_prevent_double: {
                        table: 'sys_script'
                        id: 'e72a420e241247148e2dc9d9a67bafab'
                    }
                    br_loan_set_due_date: {
                        table: 'sys_script'
                        id: '930ba491ae9644fa96d3b60a49c0ce2c'
                    }
                    br_loan_sync_status: {
                        table: 'sys_script'
                        id: 'abaf3ce0722c44e3b46f3b794447d9a0'
                    }
                    equip_battery: {
                        table: 'x_2301476_lending_equipment'
                        id: 'a7192838065e47fa8e6821568f80d51c'
                    }
                    equip_camera: {
                        table: 'x_2301476_lending_equipment'
                        id: '08a766ba32c34244a2f68f9dc810c7a1'
                    }
                    equip_headset: {
                        table: 'x_2301476_lending_equipment'
                        id: '5e5493b30ca94e2bac40a37df12c4dd2'
                    }
                    equip_ipad: {
                        table: 'x_2301476_lending_equipment'
                        id: '0da968f8350f4016a8906c28c8768d5d'
                    }
                    equip_macbook: {
                        table: 'x_2301476_lending_equipment'
                        id: 'ef34c271b7a74035ae877541c4c25eb4'
                    }
                    equip_projector: {
                        table: 'x_2301476_lending_equipment'
                        id: '9d6d55901ed64b798985ac11bb0dce57'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c62611db69b747588af3bf33d0d4fd0f'
                    }
                    'src_server_loan-rules_js': {
                        table: 'sys_module'
                        id: '55d28460f3554605ad117c423c90787c'
                    }
                    x_2301476_lending_equipment_widget: {
                        table: 'sp_widget'
                        id: '1ed3c407bd6a44f9b78fdf9fc89566cf'
                    }
                    x_2301476_lending_page_column: {
                        table: 'sp_column'
                        id: 'ca2f6adda1d34bce8bffc676139108a9'
                    }
                    x_2301476_lending_page_container: {
                        table: 'sp_container'
                        id: 'fa39275dd73a4e55aa5bab724749ec81'
                    }
                    x_2301476_lending_page_instance: {
                        table: 'sp_instance'
                        id: 'e84d5a8b5d714709812f873ca35cae8b'
                    }
                    x_2301476_lending_page_row: {
                        table: 'sp_row'
                        id: 'edd0263de3c54447908d12585de022b5'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '020da9b70dfd4bf0b65125b01309755c'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '04bce9d2126d4eee9477d174a7f05a86'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'category'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '08af7275ca5445ccb455bbfcd3f5c0e4'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'category'
                            value: 'meeting'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a30827180644275a482b519eacc34d4'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                            value: 'teal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0ffa3834ca0447ee9bae6c49a5998057'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17580452d9be4895bb3481fe7256f574'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'status'
                            value: 'available'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ddec753ac1040888750b91ac01d3f0c'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2019236dfea7472abe1019de1c7bd169'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'equipment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '244b055e77624ee1b24f494c82de3b86'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                            value: 'amber'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '29ffed2020db45ffb216247127b36fd8'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                            value: 'camera'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ea68ec7410e4efd8bae32eddd8f91ed'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                            value: 'purple'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31caeec0e45f42ed8e6d6db63f3c71ed'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'lent_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33b36e0365134484ac031f216130054f'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3463c32901604c99b73ea3d646ec9bf4'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45ac94a984ae4efba1708f0a530d0628'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46d7aee2cd2f4f3784b5b979f090a208'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'borrower'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47e3afd650994641a06de26c0c143653'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '48bd4e2cff7e4fa5bdae000521b61c90'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                            value: 'green'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '494dd3b7ac28465cab7500c27844a200'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4e32c101558a48a4a3223771eafbe3bb'
                        key: {
                            name: 'x_2301476_lending_equipment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '53aae0508d3c46d7af4bcb1fea8a6ef2'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'category'
                            value: 'camera'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ba473dc3f0c422a9a3af3051bd76f3c'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'due_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '64b7083d9af04b64aa24f500dfa4d686'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                            value: 'video'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '676d7d3510c241ec8f3f23cb6655495f'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'max_days'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ecf8e71ef5648e0ad9592108b3b56c5'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'borrower'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6fcb5010a38c4cbe9f9ed266868fbb68'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78192bc98ff949569dc39f8ecdaaef54'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bc1899418b94a29ad60c892925229f0'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c5d66e3b9c2459a80928719a26ac435'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'due_on'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '859be35e20174995864c1141162edef4'
                        key: {
                            name: 'x_2301476_lending_loan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '876bbbcdd61c457faa4ca04ae6cac989'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8863cce9963b4715814cf70d6cf6412d'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8acaa5489065476d842bbd1b576b0be0'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                            value: 'laptop'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9bae3698cadc48af8be94fc32c87d18a'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'returned_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9bcbef056c084653850ca6dfbe0ba9a3'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'equipment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a50cc7b7b16a4a5a9fa9fe1200badc13'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'returned_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a9fd8987396c44028f20b974b46462bc'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                            value: 'headset'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b299faad9ea243868693c17a5a456a03'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                            value: 'tablet'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b5bda1a719774331a95bdf278aad74ce'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6d6bb5f9b76488894ae1283d06c6405'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b71fdedcbee7448a9b65a946a68782be'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'category'
                            value: 'pc'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9144f8ddecc4d5ab71fdb00469421e5'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'status'
                            value: 'lent'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ba1238a43e984c008f8b56467808588b'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'status'
                            value: 'maintenance'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba4d8dce359c48f69f0923fdc41bbf9d'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'lent_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb29e0710f734b7596f6e27e2067709e'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'state'
                            value: 'returned'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c12c87999c754b0fa76192b714a65b92'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                            value: 'red'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c1af96affdda4b39a97db321bd2f1a3d'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'category'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c31add32ada4493096e9a399d59e82dc'
                        key: {
                            name: 'x_2301476_lending_loan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c65c97d60ae44a7682d65e928c9a015f'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cb4bb99dcdfa4830b30c2972d7364fd1'
                        key: {
                            name: 'x_2301476_lending_equipment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cbba197116d240cd8cea8c1722627a5d'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                            value: 'blue'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd26f38bab77444e793c5a9508a6dc95e'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd385ba1953944b3c9584bd8a31886dde'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd91d12fd46674ece8dfce3230dcc6037'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'e08c5bcd1f6143b989c2a5423063dfbe'
                        key: {
                            id: 'equipment_lending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0c48db68dde47a6af424637b3786831'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ef78111f6c534158b273a16698ce69de'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'icon'
                            value: 'battery'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3266af798814a4ea4202cd27ae91559'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'max_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f345d60341144757a202ed455e696874'
                        key: {
                            name: 'x_2301476_lending_loan'
                            element: 'state'
                            value: 'lent'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5f2543c2885445c87b16ce6a570a76b'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa4d50eb80764986a13965dc94f42851'
                        key: {
                            name: 'x_2301476_lending_equipment'
                            element: 'color'
                        }
                    },
                ]
            }
        }
    }
}
