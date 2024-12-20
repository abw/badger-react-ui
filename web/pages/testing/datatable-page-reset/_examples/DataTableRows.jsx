import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { Button } from '@/src/index.jsx'

const rows1 = [
  { name: 'Alan',       animal: 'Anteater',  },
  { name: 'Bobby',      animal: 'Badger',    },
  { name: 'Christina',  animal: 'Cat',       },
  { name: 'Derek',      animal: 'Dog',       },
  { name: 'Edwin',      animal: 'Elephant',  },
  { name: 'Frank',      animal: 'Ferret',    },
  { name: 'Gertrude',   animal: 'Goat',      },
  { name: 'Hector',     animal: 'Hamster',   },
  { name: 'Ian',        animal: 'Iguana',    },
  { name: 'Julie',      animal: 'Jellyfish', },
  { name: 'Kevin',      animal: 'Koala',     },
  { name: 'Lionel',     animal: 'Llama',     },
  { name: 'Mary',       animal: 'Magpie',    },
  { name: 'Nerys',      animal: 'Narwhal',   },
  { name: 'Oliver',     animal: 'Octopus',   },
  { name: 'Penny',      animal: 'Panda',     },
  { name: 'Quentin',    animal: 'Quail',     },
  { name: 'Roger',      animal: 'Raccoon',   },
  { name: 'Simon',      animal: 'Stoat',     },
  { name: 'Terry',      animal: 'Tiger',     },
  { name: 'Ulysses',    animal: 'Unicorn',   },
  { name: 'Victor',     animal: 'Vole',      },
  { name: 'Willy',      animal: 'Wombat',    },
  { name: 'Xerces',     animal: 'Xenus',     },
  { name: 'Yvonne',     animal: 'Yaz',       },
  { name: 'Zebedee',    animal: 'Zebra',     },
]
const rows2 = [
  { name: 'Amy',        animal: 'Antelope',  },
  { name: 'Belinda',    animal: 'Bat',       },
  { name: 'Colin',      animal: 'Camel',     },
  { name: 'David',      animal: 'Deer',      },
  { name: 'Edwina',     animal: 'Elk',       },
  { name: 'Felicity',   animal: 'Fox',       },
  { name: 'Geraldine',  animal: 'Gerbil',    },
  { name: 'Hyacinth',   animal: 'Hippo',     },
  { name: 'Isaac',      animal: 'Ibis',      },
  { name: 'Jane',       animal: 'Jackal',    },
  { name: 'Kristina',   animal: 'Kangaroo',  },
  { name: 'Lucy',       animal: 'Lion',      },
  { name: 'Maureen',    animal: 'Manta Ray', },
  { name: 'Nadine',     animal: 'Newt',      },
  { name: 'Olivia',     animal: 'Ocelot',    },
  { name: 'Prudence',   animal: 'Playpus',   },
  { name: 'Queenie',    animal: 'Queen Snake'},
  { name: 'Rachel',     animal: 'Rabbit',    },
  { name: 'Sarah',      animal: 'Starfish',  },
  { name: 'Tracy',      animal: 'Toucan',    },
  { name: 'Ursula',     animal: 'Urial',     },
  { name: 'Violet',     animal: 'Viper',     },
  { name: 'Wanda',      animal: 'Wallaby',   },
  { name: 'Xandra',     animal: 'Xenops',    },
  { name: 'Yasmine',    animal: 'Yak',       },
  { name: 'Zara',    animal: 'Zebu',      },
]

const DataTableRows = () => {
  const [rows, setRows] = React.useState(rows1)

  return (
    <div className="grid-1 gap-4">
      <DataTable
        rows={rows}
        columns="name animal"
        storageKey="testing-datatable-rows"
        debug
      />
      <div className="border surface-5 pad-a-2 bdr-1">
        Rows: <span className="weight-500">{rows.slice(0, 3).map(r => r.name).join(', ')}, ...etc...</span>
      </div>
      <div className="grid-3 gap-4">
        <Button
          onClick={() => setRows(rows1)}
          text="Rows 1"
        />
        <Button
          onClick={() => setRows(rows2)}
          text="Rows 2"
        />
      </div>
    </div>
  )
}

export default DataTableRows