import { Heading, Spacer, Text } from '@chakra-ui/react'
import workHistory from '../../data/workHistory.json'

export default function WorkHistory() {
  return (
    <div>
      <Heading as="h2" size="xl">
        Work History
      </Heading>
      <Spacer marginTop={'10px'} />
      {workHistory.map((item, index) => (
        <div key={index} style={{ marginTop: '5px' }}>
          <Heading as="h3" size="md">
            {item.company}
          </Heading>
          <Text color="gray.500">
            {item.period} ({item.description})
          </Text>
        </div>
      ))}
    </div>
  )
}
