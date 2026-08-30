# Probe — Technical Documentation

Welcome to the **Probe Technical Documentation** repository.

Probe is an automated, cloud-connected battery testing and reuse platform designed to help recyclers assess used lithium-ion batteries and connect usable battery stock with UPS companies.

This repository contains the technical documentation for the Probe platform, including its backend, web dashboard, mobile application, hardware, database, security, testing, integrations, and deployment processes.

---

## About Probe

Probe helps reduce guesswork when assessing used batteries by combining physical testing hardware with software and cloud services.

The platform collects battery measurements such as:

- Temperature
- Voltage
- Current
- State of Health (SOH)
- Battery classification

The collected data moves through the Probe system and is made available to the appropriate users.

### Main Users

**Recyclers**

- Register and manage testing devices
- Register and manage battery inventory
- Monitor battery testing data
- View battery health and classification
- Manage available battery stock

**UPS Companies**

- View available battery inventory
- Search for suitable battery stock
- Create battery bookings
- Track booking status

**Administrators**

- Manage users and restricted platform operations
- Access administrative functionality

---

## System Overview

Probe consists of several connected components:

```text
                 ┌──────────────────┐
                 │   Probe Hardware │
                 │   ESP32 + Sensors│
                 └────────┬─────────┘
                          │
                          │ MQTT
                          ▼
                 ┌──────────────────┐
                 │     HiveMQ       │
                 │   MQTT Broker    │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   SOH Module     │
                 │ Battery Health   │
                 │   Calculation    │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │  FastAPI Backend │
                 │   + PostgreSQL   │
                 └────────┬─────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
      ┌───────────────┐       ┌────────────────┐
      │  Web Dashboard│       │   Mobile App   │
      │    Next.js    │       │ Flutter / Dart │
      └───────────────┘       └────────────────┘
