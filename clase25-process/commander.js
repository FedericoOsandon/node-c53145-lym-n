
import { Command } from 'commander'

export const program = new Command()

program
    .option('--mode <mode>', 'modo de trabajo de mi server', 'production')
    .parse()