// data/productDetails.js

const productDetails = {
  1: {
    tag: 'Communication',
    description: `The design and construction of electronic circuits to solve practical problems is an essential technique in the fields of electronic engineering and computer engineering...`,
    includes: `Includes:\n- Base frame with power supply and connection to PC\n- CAI Software\n- Learning Platform for Transmission Line`,
    specifications: `• Voltage: 220V\n• Frequency: 50Hz\n• Interface: USB / Serial Port\n• Frame Material: Aluminum + PCB\n• Input Channels: 4`,
    topics: `• Signal Transmission Principles\n• PCB Layout & Design\n• Digital vs Analog Signals\n• Circuit Testing Techniques\n• Data Acquisition Basics`,
    reviews: [
      {
        name: 'Veronika',
        rating: 4,
        comment:
          'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
        avatar: 'https://i.pravatar.cc/100?img=1',
      },
      {
        name: 'Veronika',
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
        avatar: 'https://i.pravatar.cc/100?img=2',
      },
    ],
  },
  2: {
    tag: 'Electronics',
    description: `This kit introduces students to modern microcontroller development boards and the basics of embedded systems...`,
    includes: `Includes:\n- Arduino-compatible Board\n- Breadboard\n- Jumper Wires\n- Sensors and Actuators`,
    specifications: `• Power Supply: 5V\n• Processor: ATmega328P\n• Connectivity: USB\n• Components: 30+`,
    topics: `• Embedded Systems\n• Input/Output Devices\n• Programming in C/C++\n• Real-time Applications`,
    reviews: [
      {
        name: 'James',
        rating: 5,
        comment: 'Perfect starter kit for electronics. Everything works well!',
        avatar: 'https://i.pravatar.cc/100?img=3',
      },
    ],
  },
  3: {
    tag: 'Control Systems',
    description: `Designed for PID and process control simulations used in automation and industrial applications.`,
    includes: `Includes:\n- Control board\n- Variable resistors\n- PID modules`,
    specifications: `• Voltage: 24V\n• Adjustable Gain Settings\n• Digital Display Included`,
    topics: `• PID Control\n• Open-loop vs Closed-loop\n• Sensor Feedback\n• System Tuning`,
    reviews: [
      {
        name: 'Ava',
        rating: 4,
        comment: 'Great trainer for understanding control concepts in real time.',
        avatar: 'https://i.pravatar.cc/100?img=4',
      },
    ],
  },
  4: {
    tag: 'Networking',
    description: `This set offers practical learning on local area networks (LAN), routers, and IP configurations.`,
    includes: `Includes:\n- Ethernet cables\n- Switch\n- Router\n- PCs (Virtual or Physical)`,
    specifications: `• Data Rate: 100 Mbps\n• Ports: 8\n• Supports IPv4 and IPv6`,
    topics: `• IP Addressing\n• Subnetting\n• Network Topologies\n• Packet Switching`,
    reviews: [
      {
        name: 'Liam',
        rating: 5,
        comment: 'Good for basic and intermediate network labs.',
        avatar: 'https://i.pravatar.cc/100?img=5',
      },
    ],
  },
  5: {
    tag: 'Power Systems',
    description: `Simulates various power generation and distribution systems for educational purposes.`,
    includes: `Includes:\n- Mini power plant model\n- Generator & Turbine\n- Load bank`,
    specifications: `• Voltage Range: 110–240V\n• Power Output: Up to 1kW\n• Frequency: 60Hz`,
    topics: `• Power Generation\n• Grid Systems\n• Load Balancing\n• Energy Efficiency`,
    reviews: [
      {
        name: 'Sophie',
        rating: 5,
        comment: 'Very detailed and useful for lab work on energy systems.',
        avatar: 'https://i.pravatar.cc/100?img=6',
      },
    ],
  },
};

export default productDetails;
