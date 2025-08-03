export interface PriceCalculation {
  base: number;
  final: number;
  vehicleMultiplier: number;
  timeMultiplier: number;
}

const basePrices: Record<string, number> = {
  'key-replacement': 80,
  'key-duplication': 35,
  'transponder': 120,
  'lockout': 60,
  'ignition': 150,
  'keyfob': 90
};

const vehicleMultipliers: Record<string, number> = {
  'standard': 1,
  'luxury': 1.5,
  'european': 1.3,
  'motorcycle': 0.8
};

const timeMultipliers: Record<string, number> = {
  'regular': 1,
  'evening': 1.2,
  'emergency': 1.5
};

export function calculatePrice(
  serviceType: string,
  vehicleType: string,
  timeType: string
): PriceCalculation {
  if (!serviceType) {
    return { base: 0, final: 0, vehicleMultiplier: 1, timeMultiplier: 1 };
  }

  const basePrice = basePrices[serviceType] || 0;
  const vehicleMultiplier = vehicleMultipliers[vehicleType] || 1;
  const timeMultiplier = timeMultipliers[timeType] || 1;
  const finalPrice = Math.round(basePrice * vehicleMultiplier * timeMultiplier);

  return {
    base: basePrice,
    final: finalPrice,
    vehicleMultiplier,
    timeMultiplier
  };
}

export function getServiceName(serviceType: string): string {
  const serviceNames: Record<string, string> = {
    'key-replacement': 'Car Key Replacement',
    'key-duplication': 'Key Duplication', 
    'transponder': 'Transponder Programming',
    'lockout': 'Car Lockout Service',
    'ignition': 'Ignition Repair',
    'keyfob': 'Key Fob Programming'
  };
  
  return serviceNames[serviceType] || serviceType;
}
