# Savings Group Web Application

A web application built with React + TypeScript for managing a student savings group. The application allows students to join different savings tiers, track their contributions and interests, and manages withdrawals.

## Features

- Student registration with tier selection
- Automatic interest calculation based on tier
- Real-time dashboard showing total savings and member details
- Withdrawal functionality with automatic group updates
- Input validation for tier amounts
- Responsive design with a clean user interface

## Technical Stack

- React
- TypeScript
- Tailwind CSS
- LocalStorage

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/gzkdev/web3bridge-cohort-xii-assessment.git
```

2. Install dependencies:

```bash
cd web3bridge-cohort-xii-assessment

npm install
```

3. Start the development server:

```bash
npm run dev
```

## Usage

### Registration

1. Enter student name
2. Select a savings tier:
   - Tier 1: ₦10,000 (5% weekly interest)
   - Tier 2: ₦20,000 (10% weekly interest)
   - Tier 3: ₦30,000 (20% weekly interest)
3. View calculated weekly interest and total withdrawal amount
4. Click "Register" to join the group

### Dashboard

- View total group savings
- See detailed breakdown of each member's contribution
- Monitor accumulated interest
- Process withdrawals

### Group Management

- Maximum of 12 students allowed
- Automatic updates when members withdraw
- New students can join when spots are available

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
